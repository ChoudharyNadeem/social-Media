import { Modal, useMantineTheme } from '@mantine/core';
import PostShare from '../Postshare/PostShare';

const ShareModel=({modelOpen,setModelOpen})=> {
  const theme = useMantineTheme();

  return (
    <Modal
      overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      size='50%'
      opened = {modelOpen}
      onClose = {()=>setModelOpen(false)}
    >
        <PostShare/>
   
    </Modal>
  );
}

export default ShareModel;