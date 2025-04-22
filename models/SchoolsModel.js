// import fs from 'fs/promises';
// const path = './schools.json';

// export class SchoolsModel{
//     schools = [];
//     constructor(schools=[]){
//         this.schools = schools
//     }   

//     static randomID(){
//         return crypto.randomUUID();
//     }
     

//     static async getSchool(){
//         try {
//             const data = await fs.readFile(path);
//             this.schools = JSON.parse(data);
//             return this.schools;
//         } catch (error) {
//             console.error(error);
//         }
//     }

//     static async createSchool(School){
//         await this.getSchool();
//         School.School_ID = this.randomID();
//         this.schools.push(School);
//         const data = JSON.stringify( this.schools, null, 2);
//         try {
//             await fs.writeFile( path, data );
//             return data;
//         } catch (error) {
//             console.error(error);
//         }       }

//     static async getSchoolById(id){
//         const schools = await this.getSchool();
//         const school = schools.find(item => item.School_ID == id);
//         return school ? school : false;
//     }

//     static async getSchoolProvince(Province){
//         const schools = await this.getSchool()
//         const school = schools.filter(item => item.Province == Province)
//         return school ? school : false
//     }

//     static async getSchoolType(Type){
//         const schools = await this.getSchool()
//         const school = schools.filter(item => item.Type == Type)
//         return school ? school : false
//     }
    
//     static async  getSchoolFirstName(Name){
//         const schools = await this.getSchool()
//         const school = schools.filter(item => item.Name == Name)
//         return school ? school : false
//     }

//     static async updateSchool(id, updatedUser) {
//         await this.getSchool();
//         const index = this.schools.findIndex(u => u.School_ID == id);
      
//         if (index === -1) {
//             throw  new Error(`No existe una escuela con la ID ${id}`)
//             }

//         this.schools[index] = {
//           ...this.schools[index],
//           ...updatedUser,
//           School_ID: this.schools[index].School_ID
//         };
//         const data = JSON.stringify( this.schools, null, 2);
//             try {
//                 await fs.writeFile( path, data );
//                 return data;
//             } catch (error) {
//                 console.error(error);
//             }

//       }

//     static async deleteUser(id){
//         await this.getSchool()
//         const school = this.schools.findIndex( u => u.School_ID == id)
//         if( school == -1){
//             return false
//         }else{
//             this.schools.splice(school, 1)

//             const data = JSON.stringify( this.schools, null, 2);
//             try {
//                 await fs.writeFile( path, data );
//                 return data;
//             } catch (error) {
//                 console.error(error);
//             }
//         }
//     }

    
    
// }

