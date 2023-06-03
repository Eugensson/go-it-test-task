import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from 'redux/filter/slice';

import { selectFilter } from 'redux/filter/selectors';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

import { Find } from './Filter.styled';

const Filter = () => {
  const filterDefault = useSelector(selectFilter);
  const dispatch = useDispatch();
  const handleChange = e => {
    const val = e.target.value;
    dispatch(setStatusFilter(val));
  };

  return (
    <Find>
      <FormControl variant="outlined" sx={{ minWidth: 200 }}>
        <InputLabel id="filter-label">Filter</InputLabel>
        <Select
          labelId="filter-label"
          id="filter-select"
          value={filterDefault}
          onChange={handleChange}
          label="Filter"
        >
          <MenuItem value="All">show all</MenuItem>
          <MenuItem value="follow">follow</MenuItem>
          <MenuItem value="followings">followings</MenuItem>
        </Select>
      </FormControl>
    </Find>
  );
};

export default Filter;
