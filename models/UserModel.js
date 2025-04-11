import fs from 'fs/promises';
const path = './users.json';

export class UserModel{
    users = [];
    constructor(users=[]){
        this.users = users
    }   

    static randomID(){
        return crypto.randomUUID();
    }

    static async getUsers(){
        try {
            const data = await fs.readFile(path);
            this.users = JSON.parse(data);
            return this.users;
        } catch (error) {
            console.error(error);
        }
    }

    static async createUser(user){
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

    static async getUserById(id){
        const users = await this.getUsers();
        const user = users.find(item => item.id == id);
        return user ? user : {};
    }

    static async getUserByEmail(email){
        const users = await this.getUsers()
        const user = users.find(item => item.email == email)
        return user ? user : false
    }

    static async getUserByGender(gender){
        const users = await this.getUsers()
        const user = users.filter(item => item.gender == gender)
        return user ? user : false
    }
    
    static async  getUserByFirstName(firstName){
        const users = await this.getUsers()
        const user = users.filter(item => item.firstName == firstName)
        return user ? user : false
    }

    // async deleteUser(id){
    //     await this.getUsers()
    //     const pos = this.users.findIndex( u => u.id == id)
    //     if( pos == -1){
    //         return false
    //     }else{
    //         this.users.splice(pos, 1)
    //         const data = JSON.stringify( this.users, null, 2);
    //         try {
    //             await fs.writeFile( path, data );
    //             return data;
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     }
    // }

    async updateUser(id, updatedUser) {
        await this.getUsers();
        const index = this.users.findIndex(u => u.id == id);
      
        if (index === -1) {
          `User with ID ${id} not found.`;
        }
      
        // Mantenemos el ID original y actualizamos el resto
        this.users[index] = {
          ...this.users[index],
          ...updatedUser,
          id: this.users[index].id // forzamos a mantener el mismo ID
        };
      
        const data = JSON.stringify(this.users, null, 2);
      
        try {
          await fs.writeFile(path, data);
          return this.users[index]; // retornamos solo el usuario actualizado
        } catch (error) {
          console.error("Error al escribir archivo:", error);
          throw error;
        }
      }
    
}

