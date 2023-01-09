<?php

class job
{
    public $id;
    public $job_name;
    public $job_title;
    public $salary;
    public $job_degree;
    public $job_brunch;
    public $Experience;
    function __construct($new_job)
    {
        $this->id=$new_job['id'];
        $this->job_name=$new_job['job_name'];
        $this->job_title=$new_job['job_title'];
        $this->salary=$new_job['salary'];
         $this->job_degree=$new_job['job_degree'];
         $this->job_brunch=$new_job['job_brunch'];
          $this->Experience=$new_job['Experience'];
    }
    function new_job()
    {
        return $this->new_job();
    }
}