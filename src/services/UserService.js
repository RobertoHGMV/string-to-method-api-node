const UserRepository = require('../repositories/UserRepository');
const ReplacementRepository = require('../repositories/ReplacementRepository');

async function deleteReplacement(user_id) {
    const replacement = await ReplacementRepository.getBy(user_id);
    await ReplacementRepository.delete(replacement);
};

module.exports = {
    async add(login) {
        let user = await UserRepository.getBy(login);

        if (!user)
            user = await UserRepository.add({ login });
        
        return user;
    },

    async update(user_id, login) {
        const user = UserRepository.getByKey(user_id);
        
        if (!user)
            throw { error: `Usuário com código ${user_id} não encontrado` };

        await UserRepository.update({ _id: user_id, login });
        return UserRepository.getByKey(user_id);
    },

    async delete(user_id) {
        const user = await UserRepository.getByKey(user_id);
        
        if (!user)
            throw { error: `Usuário com código ${user_id} não encontrado` };
        
        await deleteReplacement(user_id);
        await UserRepository.delete(user);
    }
};