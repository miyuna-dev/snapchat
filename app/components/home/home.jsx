import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Button, Image,TouchableOpacity,Modal } from 'react-native';
import { useEffect, useRef, useState } from 'react';
import { Camera } from 'expo-camera';
import { shareAsync } from 'expo-sharing';
import * as MediaLibrary from 'expo-media-library';
import AppIcon from './AppIcons';


const Home = () => {
  const cameraRef = useRef();
  const [hasCameraPermission, setHasCameraPermission] = useState();
  const [hasMediaLibraryPermission, setHasMediaLibraryPermission] = useState();
  const [photo, setPhoto] = useState();
  //type camera
  const [typeCamera, setTypeCamera]= useState('back');
  const [flashMode, setFlashMode] = useState('off');

  const [imagePreview, setImagePreview] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  
  



  const changeFlashMode = () => {
    if (flashMode === 'off') {
      setFlashMode('on');
    
    } else {
      setFlashMode('off');
      
      
    }
  }
  

const changeCameraType= () => {

    if (typeCamera == "front") {
      setTypeCamera('back')
    }else if (typeCamera == 'back') {
      setTypeCamera('front')
    }else{
      setTypeCamera('front')
    }


}

  useEffect(() => {
    (async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const mediaLibraryPermission = await MediaLibrary.requestPermissionsAsync();
      setHasCameraPermission(cameraPermission.status === "granted");
      setHasMediaLibraryPermission(mediaLibraryPermission.status === "granted");
    })();
  }, []);

  if (hasCameraPermission === undefined) {
    return <Text>Requesting permissions...</Text>
  } else if (!hasCameraPermission) {
    return <Text>Permission for camera not granted. Please change this in settings.</Text>
  }

  const takePicture=async()=>{
    if(!cameraRef){
         return
    }
    try{
         const pic=await cameraRef.current.takePictureAsync()
         setImagePreview(pic.uri)
         setIsOpen(true)
        
    }catch(error){
         console.log('error taking picture');
    }
  }

  let takePic = async () => {
    let options = {
      quality: 1,
      base64: true,
      exif: false
    };

    let newPhoto = await cameraRef.current.takePictureAsync(options);
    setPhoto(newPhoto);
  };

  if (photo) {
    let sharePic = () => {
      shareAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    let savePhoto = () => {
      MediaLibrary.saveToLibraryAsync(photo.uri).then(() => {
        setPhoto(undefined);
      });
    };

    

    // return (
    //   <SafeAreaView style={styles.container}>
    //     <Image style={styles.preview} source={{ uri: "data:image/jpg;base64," + photo.base64 }} />
    //     <Button title="Share" onPress={sharePic} />
    //     {hasMediaLibraryPermission ? <Button title="Save" onPress={savePhoto} /> : undefined}
    //     <Button title="Discard" onPress={() => setPhoto(undefined)} />
    //   </SafeAreaView>
    // );
  }
 const closeImagePreview=()=>{
   setImagePreview(null)
    setIsOpen(false)
 }
  
  if(imagePreview){
    return(
      <Modal animationType='fade' visible={isOpen}>
        
          <Image source={{uri:imagePreview}} style={{height:"100%", width:"100%"}}/>
          <View style={styles.actionBottom}>
            {/* <AppIcon IonName="send-outline" size={25} color="#eee"/>s */}
            <AppIcon IonName="save-outline" size={25} color="#eee"/>
            <AppIcon IonName="send-outline" size={25} color="#eee" style={styles.sendBtn}/>
          </View>
          <View style={styles.closeBtn}>
            <AppIcon AntName="closecircle" size={30}  color="#eee" onPress={closeImagePreview} />
          </View>

      </Modal>
    )
  }

  return (
    
    <Camera style={styles.container}  type={typeCamera} flashMode={flashMode}  ref={cameraRef}>
      <TouchableOpacity style={styles.captureBtn} onPress={takePicture}></TouchableOpacity>
      <View  style={styles.header}>
       
        <AppIcon AntName="user"  color="#eee" size={24}/>
        <AppIcon IonName="settings-outline"  color="#eee" size={24}/>
        
      </View>

      <View style={styles.sideItem}  >
       
       <AppIcon  style={styles.sideIcons} IonName="camera-outline"  color="#eee" size={20} onPress={changeCameraType}/>
       
       
     </View>
     <View style={styles.sideItem2}  >
       
      
       <AppIcon IonName="flash-outline"  color="#eee" size={20} onPress={changeFlashMode}/>
       
     </View>

      
     
      
    </Camera>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    backgroundColor: '#fff',
    alignSelf: 'flex-end'
  },
  preview: {
    alignSelf: 'stretch',
    flex: 1
  },
  btn:{
    padding:20,
    backgroundColor:"#000",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:10
  },
    btnText:{
    color:"#eee",
    fontSize:18,
    fontWeight:"bold"
  },
  captureBtn:{
    position:"absolute",
    bottom:20,
    width:80,
    height:80,
    borderRadius:100,
    borderColor:"#eee",
    borderWidth:6,
    alignSelf:"center",
  },
  header:{
      position:"absolute",
      top:40,
      justifyContent:"space-between",
      padding:10,
      flexDirection:"row",
      width:"100%",
  },
  sideItem:{
    position:"absolute",
    top:120,
    right:0,
    padding:10,
    
  },
  sideItem2:{
    position:"absolute",
    top:190,
    right:0,
    padding:10,
    
  },
  sideIcons:{
    width:50,
    height:50,
    marginVertical:10,
      
    
  },
  actionBottom:{
    position:"absolute",
    bottom:20,
    padding:10,
    flexDirection:"row",
    width:"100%",
    justifyContent:"space-between",
    alignItems:"center",
  },
  sendBtn:{
    backgroundColor:"yellow",
  },
  closeBtn:{
    position:"absolute",
    padding:10,
    top: 40,

  }



      
});



export default Home;


