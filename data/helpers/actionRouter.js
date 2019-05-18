const express = require('express');
const Actions = require('./actionModel.js');
const router = express.Router();

router.get('/', async (req, res) => {
    try{
        const action = await Actions.get();
        res.status(200).json(action);
    }catch(error) {
        res.status(500).json({
            message: "action could not be retrieved"
        })
    }

});

router.get('/:id', async(req, res) => {
try{
    const action = await Actions.get(req.params.id);
    if(action) {
        res.status(200).json(action);

    }else{
        res.status(404),json({message: 'actions not found'});
    }

}catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: 'Error retrieving the action',
    });
  }
});

router.delete('/:id', async(req, res) => {
try{
    const actionId = await Actions.remove(req.params.id);
    if (actionId) {
        res.status(200).json({message: 'action has been deleted'});
    } else {
        res.status(404).json({message: 'action is not found'});
    }
}
catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
      message: 'Error removing the action',
    });
  }
});

router.put('/:id',  async(req, res) => {
    try{
        const action = await Actions.update(req.params.id, req.body);
        if(action){
            res.status(200).json(action);

        }else{
            res.status(404).json({message: 'action is not found'});
        }
    }catch (error) {
        // log error to database
        console.log(error);
        res.status(500).json({
          message: 'Error updating the action',
        });
      }
});


router.post('/', async (req, res) => {
    try{
        const action = await Actions.insert(req.body);
        res.status(201).json(action);
    
    }catch (error) {
        // log error to database
        console.log(error);
        res.status(500).json({
          message: 'Error adding action',
        });
      }
    });

// custom middleware

    

// function validatePost(req, res, next) {
//     if(req.body && Object.keys(req.body).length){
//         next();
//     }else{
//         res.status(404).json({message: 'please include req body'});
//     }

// };

module.exports = router;