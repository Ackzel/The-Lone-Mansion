var AudioFile : AudioClip;

function Update() {

 if (Input.GetKeyDown ("w"))
 {
     audio.clip = AudioFile;
     audio.Play();
 }
 
 else
 {
     audio.clip = AudioFile;
     audio.Pause();
 }
 
}