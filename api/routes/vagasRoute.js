const {Router} = require ('express')
const VagaController = require ('../controllers/VagaController')

const router = Router ()

router.get('/vagas', VagaController.listaVagas)
router.get('/vagas/:id', VagaController.selecionaVaga)
router.post('/vagas', VagaController.cadastraVaga)
router.put('/vagas/:id', VagaController.atualizarVaga)
router.delete('/vagas/:id', VagaController.deletarVaga)

module.exports = router
