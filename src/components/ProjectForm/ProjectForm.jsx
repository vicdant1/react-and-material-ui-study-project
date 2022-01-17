import {useState, useEffect} from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField'
import useStyles from './projectFormStyles'
import NumberFormat from 'react-number-format';
import { Save } from '@material-ui/icons';
import { Box, Grid, FormControl, Select, InputLabel, Button, MenuItem } from '@material-ui/core';

const ProjectForm = () => {
    const classes = useStyles();
    const [budgetValue, setBudgetValue] = useState('');
    const [category, setCategory] = useState(0);
    const [selectData, setSelectData] = useState([]);

    useEffect(async () => {
        await axios.get('http://localhost:5000/categories').then(res => setSelectData(res.data));
    }, []);
    

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <Grid className={classes.formContainer} container alignItems='center' justifyContent='center'>
            <Grid className={classes.mainForm} item xs={6}>
                <form className={classes.form}>
                    <TextField color='secondary' id='ProjectName' name='ProjectName' label="Project name" multiline variant="outlined" maxRows={4} fullWidth required/>
                    <NumberFormat
                        value={budgetValue}
                        className="foo"
                        displayType={'text'}
                        thousandSeparator={true}
                        prefix={'USD$ '}
                        renderText={(value, props) => <TextField {...props} onChange={(e) => setBudgetValue(e.target.value)} value={value} fullWidth color='secondary' label="Project budget" multiline variant="outlined" required></TextField>}
                    />
                    <Box style={{gap: '10px'}} display='flex' alignItems='center' justifyContent='space-between'>
                        <Grid item xs={6}>    
                            <FormControl required fullWidth>
                                <InputLabel htmlFor="category">Category</InputLabel>
                                <Select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                inputProps={{
                                    name: 'category',
                                    id: '1',
                                }}
                                >
                                    <MenuItem aria-label="None" value={0}>Select a category</MenuItem>
                                    {selectData.map((option) => {
                                        return (
                                            <MenuItem value={option.id}>{option.name}</MenuItem>
                                        )
                                    })}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item xs={6}>
                            <TextField
                                fullWidth
                                id="datetime-local"
                                label="Deadline"
                                type="datetime-local"
                                required
                                className={classes.textField}
                                InputLabelProps={{
                                shrink: true,
                                }}
                            />
                        </Grid>
                    </Box>

                    <Grid xs={12} container justifyContent='flex-end'>
                        <Grid item>
                            <Button type="submit" onClick={(e) => handleSubmit(e)} size='large'
                            variant='contained' color='secondary' startIcon={<Save />}>Submit</Button>
                        </Grid>
                    </Grid>
                </form>
            </Grid>
        </Grid>
    )
}

export default ProjectForm