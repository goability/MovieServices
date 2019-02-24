<?php

namespace Tests\Functional;

class MovieServicesTest extends BaseTestCase
{
    /*
        Get all movies test
    */
    public function testMovies()
    {
        $response = $this->runApp('GET', '/Movies');

        $this->assertEquals(200, $response->getStatusCode());
        // could add more relative to data
    }
    /*
        Get all movies test
    */
    public function testMoviesWithFilter()
    {
        $response = $this->runApp('GET', '/Movies?rating=PG-13&title=AIR');

        $this->assertEquals(200, $response->getStatusCode());
        // could add more relative to data
    }
    /*
        Get one Movie
    */
    public function testOneMovie()
    {
        $response = $this->runApp('GET', '/Movies/22');

        $this->assertEquals(200, $response->getStatusCode());
        // could add more relative to data
    }
    /*
        Get actors in movie
    */
    public function testActorsInMovie()
    {
        $response = $this->runApp('GET', '/Movies/22/Actors');

        $this->assertEquals(200, $response->getStatusCode());
        // could add more relative to data
    }
}
