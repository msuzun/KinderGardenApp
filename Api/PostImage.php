<?php


if (isset($_POST['submit'])){
    foreach ($_FILES['doc']['name'] as $key=>$val){
        move_uploaded_file($_FILES['doc']['tmp_name'][$key],'media/'.$val);
    }
}

/*$data = array('status' => false);

if(isset($_POST['submit'])){
   $target_file = basename($_FILES['file']['name']);
    $file_type = pathinfo($target_file,PATHINFO_EXTENSION);
        $data['image'] = time() . '.' . $file_type;
            if (move_uploaded_file($_FILES['file']['tmp_name'], $data['image'])){
                $data['status'] = true;
            }
            else{
                $data['message'] = "Error on uploading";
            }

}

header('Access-Control-Allow-Origin: *');
header("Content-type:application/json");
echo json_encode($data);*/