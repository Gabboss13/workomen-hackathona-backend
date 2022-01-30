const database = require('../models')

class VagaController {
    static async listaVagas(req, res) {
        try {
            const todasAsVagas = await database.Vagas.findAll()
            return res.status(200).json(todasAsVagas)
        } catch (error) {
            return res.status(500).json (error.message)
        }      
    }

    static async selecionaVaga (req, res) {
        const {id} = req.params
        try {
            const vagaSelecionada = await database.Vagas.findOne({ 
                where: {
                    id: Number(id)
                } 
            })
            console.log(await vagaSelecionada)
            const prioridade = {...vagaSelecionada, contagemPrioridade:vagaSelecionada.pessoa_preta + vagaSelecionada.mae + vagaSelecionada.pessoa_trans + vagaSelecionada.mais_50 + vagaSelecionada.pessoa_pcd}
            return res.status(200).json(prioridade)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async cadastraVaga ( req,res) {
        const novaVaga = req.body
        try{
            const novaVagaRegistrada= await database.Vagas.create(novaVaga)
            return res.status(200).json(novaVagaRegistrada)

        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizarVaga(req,res) {
        const {id} = req.params
        const novasInfos = req.body
        try {
            await database.Vagas.update(novasInfos, {where: {id: Number(id)}})
            const vagaAtualizada = await database.Vagas.findOne({ where: {id: Number(id)}})
            return res.status(200).json(vagaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletarVaga(req,res) {
        const {id} = req.params
        // const {nome} = req.params
        try {
            await database.Vagas.destroy({where: {id: Number(id)}})
                return res.status(200).json({mensagem: `A vaga de ${id} foi deletada do banco e dados com sucesso!`})
        } catch (error) {
            return res.status(500).json(error.message) 
        }

    }
}

module.exports = VagaController