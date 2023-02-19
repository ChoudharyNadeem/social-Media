import { Modal, useMantineTheme } from '@mantine/core';

const ProfileModel=({modelOpen,setModelOpen})=> {
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
    <form className='infoForm'>
        <h3>Your info</h3>
        <div>
            <input type="text" placeholder='First Name' name='FirstName' className='infoinput' />
            <input type="text" placeholder='Last Name' name='LastName' className='infoinput' />
        </div>
        <div>
        <input type="text" placeholder='works At' name='worksAt' className='infoinput' />
        </div>
        <div>
        <input type="text" placeholder='Lives In' name='LivesIn' className='infoinput' />
            <input type="text" placeholder='Country' name='Country' className='infoinput' />
        </div>
        <div>
            <input type="text" className='infoinput' placeholder='RelationShip Stattus' name='RelationShipStattus'   />
        </div>
        <div>
            Profile Image
      <input type="file" name='profilrImg'  />
      Cover Image
      <input type="file" name='coverImg' />

        </div>
        <button className='button infoButton'>Update</button>
    </form>
    </Modal>
  );
}

export default ProfileModel;