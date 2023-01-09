<?php

class humans
{
    public $title;
    public $first_name;
    public $last_name;
    public $phone_number;
    public $city;
    public $address;
    public $gender;
    public $occupation;
    public $user_name;
    public $birthday;
    public $password;
    public $email;
    function __construct($new_user)
    {
        $this->title=$new_user['title'];
        $this->first_name=$new_user['f_name'];
        $this->last_name=$new_user['l_name'];
        $this->phone_number=$new_user['phone_number'];
         $this->birthday=$new_user['birthday'];
        $this->email=$new_user['email'];
        $this->user_name=$new_user['user_name'];
        $this->city=$new_user['city'];
        $this->password =$new_user['password'];
        $this->address=$new_user['address'];
        $this->gender=$new_user['gender'];
        $this->occupation=$new_user['occupation'];

    }

    function post()
{
    return $this->new_user;
}
}