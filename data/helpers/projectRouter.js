const express = require('express');
const Projects = require('./projectModel.js');
const router = express.Router();

router.post('/',  async (req, res) => {
    try{
        const projects = await Projects.insert(req.body);
        res.status(201).json(projects);
    
    }catch (error) {
        // log error to database
        console.log(error);
        res.status(500).json({
          message: 'Error adding projects',
        });
      }
    });
    
    //where is the correct userDB.js function for the below?
    
    // router.post('/:id/posts', async (req, res) => {
    // const userPost= {...req.body, userId: req.params.id };
    // try{
    //     const post = await post.
    // }
    // });
    
    router.get('/', async (req, res) => {
        try{
            const projects= await Projects.get();
    
            res.status(200).json(projects);
        }catch(error) {
            res.status(500).json({
                message: "projects could not be retrieved"
            })
        }
    
    });

    //? maybe below will work?
    
    router.get('/:id',  async (req, res) => {
    try{
        const projects = await Projects.get(req.params.id);
        if(projects) {
            res.status(200).json(projects);
        }else{
            res.status(404).json({message:'projects does not exist'});
        }
    } catch (error) {
          
        res.status(500).json({
          message: 'Error retrieving the projects',
        });
      }
    });
    
    
    
    router.get('/:id/action', validateUserId, async (req, res) => {
    try{
        const projects = await Projects.getProjectActions(req.params.id);
      res.status(200).json(projects);
        }catch (error) {
            // log error to server
            console.log(error);
            res.status(500).json({
              message: 'Error getting the actions for the project',
            });
          }
    });
    
    router.delete('/:id',  async(req, res) => {
    
        try{
            const projects = await Projects.remove(req.params.id);
            if(projects>0) {
                res.status(200).json({message:'user removed'});
            } else{
                res.status(404).json({message: 'projects is not found'});
            }
    
        }catch (error) {
            // log error to database
            console.log(error);
            res.status(500).json({
              message: 'Error removing the projects',
            });
          }
    
    });
    
    router.put('/:id',   async (req, res) => {
        try{
    
            const projects = await Projects.update(req.params.id, req.body);
            if(projects) {
                res.status(200).json(projects);
            }else{
                res.status(404).json({message:'projects not found'});
            }
        }catch (error) {
            // log error to database
            console.log(error);
            res.status(500).json({
              message: 'Error updating the projects',
            });
          }
    
    });
    
    //custom middleware
    async function validateUserId(req, res, next) {
        try{
            const {id} = req.params;
            const projects = await Projects.getProjectActions(id);
            if(projects) {
                req.projects = projects;
                next();
            }else{
                 // next({message: "user not found; invalid user"});
                res.status(404).json({message: 'action not found; invalid id'});
            }
        }catch (error) {
            // log error to server
            console.log(error);
            res.status(500).json({
              message: 'Error getting the action',
              });
            }
    };
  

    module.exports = router;