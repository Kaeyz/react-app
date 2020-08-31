import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Button from '../../../components/common/Button';
import Dialog from '@material-ui/core/Dialog';
import close from '../../../assets/close.svg'
import SelectInput from '../../../components/hra_input/inputs/SelectInput';

const Wrapper = styled.div`

  padding: 0 2rem 2rem 2rem;

.bold{
  font-weight: bold;
  font-size: 1.6rem;
line-height: 2.5rem;
color: ${props => props.theme.color.ui_05};
}
.big{
  font-size: 2.1rem;
  line-height: 4.0rem;
}
.light{
  font-weight: 300;
  padding: 1rem 0 3rem 0;}
.close{
  justify-content: flex-end;
}
.heading{
  margin-top: -18px;
}
.btn{
  .button{
    width: 100% !important;
  }
}
.select-input{
  padding: 4rem 0;
}
`;

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

 
  return (
    <Dialog  aria-labelledby="simple-dialog-title" open={open} onClose={handleClose}>
      <Wrapper>
        <div className="close flex" >
          <img src={close} alt="close-modal" />
        </div>
        <div className="heading">
          <h1 className="bold  big">Questions on Protein</h1>
          <p className="light bold">A balanced diet lorem ipsum blished fact that a reader will be distracted by the readable content.</p>
        </div>
        <div className="select">
          <h1 className="bold">Select the options you’ll like to include in your meal plan?</h1>
          
          <Grid container className='select-input'>
          <Grid item xs={12} sm={6}>
            option
          <SelectInput label='jala'/>
        </Grid>
        <Grid item xs={12} sm={6}>
        option
        </Grid>
          <Grid item xs={12} sm={6}>
            option
          <SelectInput label='jala'/>
        </Grid>
        <Grid item xs={12} sm={6}>
        option
        </Grid>
          <Grid item xs={12} sm={6}>
            option
          <SelectInput label='jala'/>
        </Grid>
        <Grid item xs={12} sm={6}>
        option
        </Grid>
          </Grid>
          <Grid item xs={12} className='btn'>
  <Button
					theme="darkGreen"
    text="Complete"
  />
</Grid>
        </div>
      </Wrapper>
    </Dialog>
  );
}

export default function MealModal() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
   
  };

  return (
    <div>
           <Grid container className='btn'>
<Grid item xs={12} sm={4}>
  <Button
 onClick={handleClickOpen}					theme="darkGreen"
    text="Customise your meal plan"
  />
</Grid>
</Grid>
      <SimpleDialog className='hr' open={open} onClose={handleClose} />
    </div>
  );
}
