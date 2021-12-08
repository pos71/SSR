import express          from 'express'
import React            from 'react'
import {renderToString} from 'react-dom/server'
import Index            from '../pages/index'
import {Helmet}         from "react-helmet";

const router = express.Router()

router.get('*', async (req, res) => {
  const reactComp = renderToString(<Index/>)
  const helmet = Helmet.renderStatic();
  res.status(200).render('pages/index', {reactApp: reactComp, helmet})
})


export default router
