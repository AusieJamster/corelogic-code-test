import { Button } from '@mui/material';
import React from 'react';

interface CustomButtonProps {
  onClick: () => void;
  label: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ onClick, label }) => {
  return (
    <Button
      variant="outlined"
      onClick={onClick}
      sx={{ width: '100%', maxWidth: 300, marginX: 'auto', padding: 1 }}
    >
      {label}
    </Button>
  );
};

export default CustomButton;
