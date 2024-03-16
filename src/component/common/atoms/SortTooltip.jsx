import { Box } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const SortTooltip = ({ sort }) => {
  return (
    <Box border='1px solid gray' borderRadius='999px' p='11px' paddingX='16px' colorScheme='blue'>
      {sort}
    </Box>
  );
};

SortTooltip.propTypes = {
  sort: PropTypes.string,
};

export default SortTooltip;