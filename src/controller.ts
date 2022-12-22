import { Request, Response } from 'express'

import countryNumber from './countryNumber.json'
import countryFlag from './countryFlag.json'

import helper from './helper'

const controller = {
  healthcheck: (req: Request, res: Response) => res.sendStatus(200),
  getCountry: (req: Request, res: Response) => {
    const name = helper.upperWord(req.params.name)
    console.log(`Searched by name: ${name}`)

    const countryNumberFind = countryNumber.find((data) => data.name === name)
    const countryFlagFind = countryFlag.find(
      (value) => value.name === name,
    )?.image

    if (countryNumberFind === undefined || countryFlagFind === undefined) {
      return res.status(404).send()
    }

    return res.status(200).json({
      ddi: countryNumberFind.dial_code,
      image: countryFlagFind,
    })
  },
}

export default controller
