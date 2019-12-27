const UserRepository = require('../repositories/UserRepository');

module.exports = {
    async add(login) {
        let user = await UserRepository.getBy(login);

        if (!user)
            user = await UserRepository.add({ login });
        
        return user;
    }
};