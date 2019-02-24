<?php
/*
    Database ORM
*/
class DBObjectMapper{

    protected $db;
    protected $logger;
    public function __construct($db, $logger) {
        $this->db = $db;
        $this->logger = $logger;
    }
    /*
        Show all movies
    */
    public function showAllMovies($whereClause){

        $sql = "SELECT title from film_list";

        if (isset($whereClause)){
            $sql .= $whereClause;
        }
        $this->logger->info($sql);

        $qry = $this->db->query($sql);

        $results = [];

        foreach($this->db->query($sql) as $oneMovie){
            $results[] = $oneMovie;
        }
        return $results;
    }
    /*
        Get data for one movie
    */
    public function getMovieDetails($movieId){

        $sql = "SELECT DISTINCT t2.name AS language_id, t3.name as original_language_id, t1.film_id, t1.title, t1.description, t1.release_year, t1.rental_duration, t1.rental_rate, t1.length, t1.length, t1.replacement_cost, t1.rating, t1.special_features, t1.last_update FROM film AS t1 LEFT JOIN language t2 ON (t1.language_id=t2.language_id) LEFT JOIN language t3 ON (t1.original_language_id=t3.language_id) WHERE t1.film_id=" . $movieId;
        //$sql = "SELECT * from film_list WHERE FID=" . $movieId;

        $this->logger->info($sql);

        $qry = $this->db->query($sql);

        $results = [];
        foreach($this->db->query($sql) as $oneMovie){
            $results[] = $oneMovie;
        }
        return $results;
    }
    /*
        Get actors in a movie
    */
    public function getActorsInMovie($movieId){

        $sql = "SELECT actors from film_list WHERE FID=" . $movieId;

        $this->logger->info($sql);

        $qry = $this->db->query($sql);

        $results = [];
        foreach($this->db->query($sql) as $oneMovie){
            $results[] = $oneMovie;
        }
        return $results;
    }
}
