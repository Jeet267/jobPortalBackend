
import  Company  from  '../model/company.model.js'

export const registerCompany = async (req,res) =>{

    // console.log(req.id);
    
    try{
        const {companyName} = req.body;
        if (!companyName){
            return res.status(400).json({
                message:"Companyname is req",
                success:false
            })
        }
        let company = await Company.findOne({name:companyName})
        if (company){
            return res.status(400).json({
                message:"You can't register same Comapny",
                success:false
            })
        }

        company = await Company.create({
            name:companyName,
            userId:req.id,
        })
        return res.status(201).json({
            message:"Company registered Successfully",
            company,
            success:true
        })


    }catch(error){
        console.log(error)

    }
}

export const getComapny = async(req,res)=>{
    try{
        const userId = req.id;// logged in user id
        const companies =await Company.find({userId});
        if (!companies){
            return res.status(400).json({
                message:"Companies not found",
                success:false
            })
        }
        return res.status(200).json({
            message:"got all companies",
            companies,
            success:true
        })

    }catch(error){
        console.log(error)

    }
}
export const getComapnyById =async(req,res)=>{
    try{
        const companyId = req.params.id;
        const comapny = await Company.findById(companyId);
        if (!comapny){
            return res.status(404).json({
                message:"Company not found",
                success:false
            })
        }
        return res.status(200).json({
            comapny,
            success:true
        })

    }catch(error){
        console.log(error)

    }
}
export const updateCompany = async (req,res)=>{
    try{
        const {name, description, website, location } = req.body;
        const file = req.file;
        //idhar clodinairy ayega

        const updateData = {name,description,website,location};
        const company = await Company.findByIdAndUpdate(req.params.id, updateData,{new:true})

        if (!company){
            return res.status(404).json({
                message:"Company not found",
                success:false
            })
            
        }
        return res.status(200).json({
            // company,
            message:"Company information updated",
            success:true
        })

    }catch(error){
        console.log(error)

    }
}
