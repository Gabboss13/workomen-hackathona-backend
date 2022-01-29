const database = require('../models')

class UsuarioController {
    static async listaUsuarios(req, res) {
        try {
            const todosUsuarios = await database.Usuarios.findAll()
            return res.status(200).json(todosUsuarios)
        } catch (error) {
            return res.status(500).json (error.message)
        }      
    }

    static async pegaUsuario (req, res) {
        const {id} = req.params
        try {
            const usuaria = await database.Usuarios.findOne({ 
                where: {
                    id: Number(id)
                } 
            })
            console.log(await usuaria)
            const resultado = {...usuaria, vulnerabilidadesContagem:usuaria.pessoa_preta + usuaria.mae + usuaria.pessoa_trans + usuaria.mais_50 + usuaria.pessoa_pcd}
            return res.status(200).json(resultado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async criarUsuario ( req,res) {
        const novoUsuario = req.body
        try{
            const novoUsuarioRegistrado = await database.Usuarios.create(novoUsuario)
            return res.status(200).json(novoUsuarioRegistrado)

        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizarUsuario(req,res) {
        const {id} = req.params
        const novoDados = req.body
        try {
            await database.Usuarios.update(novoDados, {where: {id: Number(id)}})
            const usuarioAtualizado = await database.Usuarios.findOne({ where: {id: Number(id)}})
            return res.status(200).json(usuarioAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async deletarUsuario(req,res) {
        const {id} = req.params
        try {
            await database.Usuarios.destroy({where: {id: Number(id)}})
                return res.status(200).json({mensagem: `O usuário com id ${id} foi deletado do banco e dados com sucesso!`})
        } catch (error) {
            return res.status(500).json(error.message) 
        }

    }
}

module.exports = UsuarioController