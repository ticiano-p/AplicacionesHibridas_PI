import fs from 'fs/promises';
const path = './users.json';

 class UserModel{
    users = [];
    constructor(users=[]){
        this.users = users
    }
    randomID(){
        return crypto.randomUUID();
    }
    async addUser(user){
        await this.getUsers();
        user.id = this.randomID();
        this.users.push(user);
        
        // formateamos los datos de los useros
        const data = JSON.stringify( this.users, null, 2);
        try {
            await fs.writeFile( path, data );
            return data;
        } catch (error) {
            console.error(error);
        }
    }
    async getUsers(){
        try {
            const data = await fs.readFile(path);
            this.users = JSON.parse(data);
            return this.users;
        } catch (error) {
            console.error(error);
        }
    }

    async getUserById(id){
        const users = await this.getUsers();
        const user = users.find(item => item.id == id);
        return user ? user : {};
    }

    async deleteUser(id){
        await this.getUsers()
        const pos = this.users.findIndex( u => u.id == id)
        if( pos == -1){
            return false
        }else{
            this.users.splice(pos, 1)
            const data = JSON.stringify( this.users, null, 2);
            try {
                await fs.writeFile( path, data );
                return data;
            } catch (error) {
                console.error(error);
            }
        }
    }

    async updateUser(id, user){
        await this.getUsers()
        const pos = this.users.findIndex( u => u.id == id)
        this.users[pos].name = user.name
        this.users[pos].Email = user.Email
        const data = JSON.stringify( this.users, null, 2);
        try {
            await fs.writeFile( path, data );
            return data;
        } catch (error) {
            console.error(error);
        }
    }
}
export default UserModel;

