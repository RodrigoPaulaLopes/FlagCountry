import { Request, Response } from 'express'

import countryNumber from '../json/countryNumber.json'
import countryFlag from '../json/countryFlag.json'

import helper from '../helpers/helper'
import { FlagsInterface, NumberFlag } from '../interfaces/Flags.interface'

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
  getAllCountry: (req: Request, res: Response) => {

    const countryNumberFind: FlagsInterface[] = countryNumber.filter((data) => data.code)
    const countryFlagFind: FlagsInterface[] = countryFlag.filter((value) => value.code)

    const flags: NumberFlag[] = []
    
    countryNumberFind.forEach(data => {
      countryFlagFind.forEach(data2 => {
        if(data.code == data2.code){
          flags.push({ddi: data.dial_code, image: data2.image}) 
        }
      })
    })
    
    if (countryNumberFind === undefined || countryFlagFind == undefined) {
      return res.status(404).send()
    }
 
    if (flags === undefined || flags == null) {
      return res.status(404).send()
    }

    res.status(200).json(flags)
  },
}


export default controller
