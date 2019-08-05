<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Blog extends Model
{
    public function get_products($blogId)
    {
        $this->db->where('id', $blogId);
        $query = $this->db->get('blogs');
        return $query->row();
    }
}
