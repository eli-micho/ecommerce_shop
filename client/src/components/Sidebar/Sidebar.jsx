import React, {useState} from 'react';
import './styles.scss';

//MaterialUI
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

export default function Sidebar() {
    const [checked, setChecked] = useState(true);

    const handleChange = (e) => {
        setChecked(e.target.checked)
    }
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <h2 className="sidebarTitle">Filters</h2>

                <form className="filtersForm">
                    <div className="formRow">
                        <input type="text" placeholder="Search"/>
                    </div>

                    <div className="formRow">
                        <h4>Category</h4>
                        <FormControl component="fieldset">
                            <FormControlLabel
                                value="end"
                                control={<Checkbox color="primary"/>}
                                label="Appliances"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="end"
                                control={<Checkbox color="primary"/>}
                                label="Chairs"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="end"
                                control={<Checkbox color="primary"/>}
                                label="Couches"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="end"
                                control={<Checkbox color="primary"/>}
                                label="Sofas"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="end"
                                control={<Checkbox color="primary"/>}
                                label="Tables"
                                labelPlacement="end"
                            />
                        </FormControl>
                    </div>

                    <div className="formRow">
                        <h4>Price</h4>
                        <FormControl component="fieldset">
                            <FormControlLabel
                                value="end"
                                control={<Checkbox color="primary"/>}
                                label="Under $25"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="end"
                                control={<Checkbox color="primary"/>}
                                label="$25 to $50"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="end"
                                control={<Checkbox color="primary"/>}
                                label="$50 to $150"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="end"
                                control={<Checkbox color="primary"/>}
                                label="$150 to $300"
                                labelPlacement="end"
                            />
                            <FormControlLabel
                                value="end"
                                control={<Checkbox color="primary"/>}
                                label="$300+"
                                labelPlacement="end"
                            />
                        </FormControl>
                    </div>

                    <Button variant="contained" className="filterBtn">Apply Filters</Button>
                </form>
                
            </div>
        </div>
    )
}
