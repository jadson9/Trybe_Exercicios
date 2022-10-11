const proprieties = ['name', 'price', 'description'];

const proprietiesDescription = ['createdAt', 'rating', 'difficulty']

const validationPropName = (req, res, next) => {
  const corpo = req.body;
  if(proprieties[0] in corpo) {
    next()
  } else {
    res.status(400).send({ "message": "O campo name é obrigatório" })
  }
}

const validationNameQuant = (req, res, next) => {
  const name = req.body.name;
  if(name.length > 4) {
    next()
  } else {
    res.status(400).send({ "message": "O campo name deve ter pelo menos 4 caracteres" })
 }
}


const validationPropPrice = (req, res, next) => {
    const corpo = req.body;
    if(proprieties[1] in corpo) {
      next()
    } else {
      res.status(400).send({ "message": "O campo price é obrigatório" })
    }
}
  
const validationPriceValue = (req, res, next) => {
    const price = req.body.price;
    if(price >= 0) {
      next()
    } else {
      res.status(400).send({ "message": "O campo price deve ser um número maior ou igual a zero" })
   }
}

const validationPropDescrip = (req, res, next) => {
    const corpo = req.body;
    if(proprieties[2] in corpo && proprietiesDescription.every((el) => el in corpo.description)) {
      next()
    } else {
      res.status(400).send({ "message": "O campo description com as chaves createdAt, rating e difficulty são obrigatórios" })
    }
}

const validationPropCreated = (req, res, next) => {
    const pro = req.body.description.createdAt;
    if(pro[2] === '/' && pro[5] == '/' && pro.length === 10) {
      next()
    } else {
      res.status(400).send({ "message": "O campo createdAt deve ter o formato \'dd/mm/aaaa\'" })
    }
}

const validationPropRating = (req, res, next) => {
    const pro = req.body.description.rating;
    if(pro >= 1 && pro <= 5) {
      next()
    } else {
      res.status(400).send({ "message": "O campo rating deve ser um número inteiro entre 1 e 5" })
    }
}

const validationPropDificulty = (req, res, next) => {
    const pro = req.body.description.difficulty;
    if(pro === 'Fácil' || pro === 'Médio' || pro === 'Difícil') {
      next()
    } else {
      res.status(400).send({ "message": "O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'" })
    }
}


module.exports = {
  validationPropName,
  validationNameQuant,
  validationPropPrice,
  validationPriceValue,
  validationPropDescrip,
  validationPropCreated,
  validationPropRating,
  validationPropDificulty
}

// dd/mm/aaaa