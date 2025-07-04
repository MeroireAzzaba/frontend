const express = require('express');
const router = express.Router();
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// List all centers
router.get('/', async (req, res) => {
  try {
    const resFetch = await fetch('http://localhost:3000/center')
    const centers = await resFetch.json()
    res.render('centers/index', { centers });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching centers');
  }
});

// Show form to create new center
router.get('/centers/new', (req, res) => {
  res.render('centers/new');
});

// Create new center
// router.post('/centers', async (req, res) => {
//   try {
//     const { name, address } = req.body;
//     await prisma.center.create({
//       data: { name, address }
//     });
//     res.redirect('/centers');
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error creating center');
//   }
// });

// Show center details
router.get('/:id', async (req, res) => {
  try {
    const resFetch = await fetch(`http://localhost:3000/center/edit?id=${req.params.id}`)
    const center = await resFetch.json()
    res.render('centers/show', { center });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching center');
  }
});

// Show edit form
router.get('/:id/edit', async (req, res) => {
  console.log(req.url)
  try {
    const resFetch = await fetch(`http://localhost:3000/center/edit?id=${req.params.id}`)
    const center = await resFetch.json()
    res.render('centers/edit', { center });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error fetching center');
  }
});

// Update center
// router.put('/centers/:id', async (req, res) => {
//   try {
//     const { name, address } = req.body;
//     await prisma.center.update({
//       where: { id: req.params.id },
//       data: { name, address }
//     });
//     res.redirect('/centers');
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error updating center');
//   }
// });

// Delete center
// router.delete('/centers/:id', async (req, res) => {
//   try {
//     await prisma.center.delete({
//       where: { id: req.params.id }
//     });
//     res.redirect('/centers');
//   } catch (error) {
//     console.error(error);
//     res.status(500).send('Error deleting center');
//   }
// });

module.exports = router;