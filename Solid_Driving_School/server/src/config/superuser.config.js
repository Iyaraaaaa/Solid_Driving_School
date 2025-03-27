const User = require('../model/user.model');
const Role = require('../model/role.model');
const UserStatus = require('../model/userstatus.model');
const Gender = require('../model/gender.model');


const createSuperUserAdmin = async () => {

    try {

        if(!await Role.findOne({name:"SUPER_ADMIN"})) {
            const superadminrole = await new Role({
                name:"SUPER_ADMIN"
            }).save();
        }

        if(!await Role.findOne({name:"ADMIN"})) {
            const superadminrole = await new Role({
                name:"ADMIN"
            }).save();
        }

        if(!await Role.findOne({name:"USER"})) {
            const superadminrole = await new Role({
                name:"USER"
            }).save();
        }

        if(!await UserStatus.findOne({name:"Active"})) {
            const superadminrole = await new UserStatus({
                name:"Active"
            }).save();
        }

        if(!await UserStatus.findOne({name:"Inactive"})) {
            const superadminrole = await new UserStatus({
                name:"Inactive"
            }).save();
        }

        if(!await Gender.findOne({name:"Male"})) {
            const superadminrole = await new Gender({
                name:"Male"
            }).save();
        }

        if(!await Gender.findOne({name:"Female"})) {
            const superadminrole = await new Gender({
                name:"Female"
            }).save();
        }

        const role = await Role.findOne({name:"SUPER_ADMIN"});
        const status = await UserStatus.findOne({name:"Active"});

        setTimeout(async()=>{
            if(!await User.findOne({role:role._id})) {
                const superuser = new User({
                    firstname:'System',
                    lastname:'User',
                    username:'systemadmin@gmail.com',
                    password:'admin1234',
                    canDelete:false,
                    userstatus:status._id,
                    role:role._id,
                    photo:'null'
                }).save(); 
            }

        },1000)
       
    }catch(err){
        console.error("Error while initiating superuser" + err);

    }
}

module.exports = createSuperUserAdmin;