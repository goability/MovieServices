<?php

use Slim\Http\Request;
use Slim\Http\Response;

/*
    GET ONE MOVIE:
    Movie details /Movies/[FId]

*/
$app->get('/Movies/[{movieId}]', function (Request $request, Response $response, array $args) {


    $constants = new Constants();
    $db = new DBObjectMapper($this->db, $this->logger);

    $serviceName = 'Movies';
    $this->logger->info("Client requesting Movies service");
    $movieId = $args['movieId'];
    $this->logger->info("Client requesting movie details for movieId:  $movieId");

    $args[] = $serviceName;

    //All Query Parameters
    $queryParameters = $request->getQueryParams();
    //Filter list - only the queryParams we are looking for
    $inputParameters = [];
    $replyHTML = false;
    $movieData = [];

    $movieData = $db->getMovieDetails($movieId);


    $inputArray = ['inputParameters'=>$inputParameters, 'movieData'=>$movieData];
    $viewName = 'viewMovie.phtml';

    return sendReply($response, $viewName, $inputArray, $replyHTML);

});
/*
    /Movies --> List all Movies
    /Movies?WithQuery --> Apply filters

*/
$app->get('/Movies', function (Request $request, Response $response, array $args) {

    $constants = new Constants();
    $db = new DBObjectMapper($this->db, $this->logger);
    $serviceName = 'Movies';
    $this->logger->info("Client requesting Movies service");
    $args[] = $serviceName;

    //All Query Parameters
    $queryParameters = $request->getQueryParams();
    //Filter list - only the queryParams we are looking for
    $inputParameters = [];
    $replyHTML = false;
    $movieData = [];

    $whereClause = buildWHEREClause($queryParameters);
    $movieData = $db->showAllMovies($whereClause);


    $inputArray = ['inputParameters'=>$inputParameters, 'movieData'=>$movieData];
    $viewName = 'viewMovies.phtml';

    return sendReply($response, $viewName, $inputArray, $replyHTML);

});
/*
    List of actors in a movies
    /Movies/[FId]/Actors
*/
$app->get('/Movies/{movieId}/Actors', function (Request $request, Response $response, array $args) {
    $constants = new Constants();
    $db = new DBObjectMapper($this->db, $this->logger);

    $serviceName = 'Movies';

    $movieId = $args['movieId'];
    $this->logger->info("Client requesting actors in movie for movieId:  $movieId");

    $args[] = $serviceName;

    //All Query Parameters
    $queryParameters = $request->getQueryParams();
    //Filter list - only the queryParams we are looking for
    $inputParameters = [];
    $replyHTML = false;
    $movieData = [];

    $movieData = $db->getActorsInMovie($movieId);

    $inputArray = ['inputParameters'=>$inputParameters, 'movieData'=>$movieData];
    $viewName = 'viewMovie.phtml';

    return sendReply($response, $viewName, $inputArray, $replyHTML);
});

/*
    Helper functions - BuildWHERE, getQueryParams, sendReply (JSON/HTML)
*/
function buildWHEREClause($queryParameters){
    $constants = new Constants();
    $whereClause = ' WHERE ';
    // Filter out the query parameters
    if (isset($queryParameters) && count($queryParameters)>0){

        foreach ($constants::InputQueryParameterNames as $key => $value) {
            //Only grab the ones we have configured
            if (array_key_exists($key, $queryParameters)){
                $inputParameters[$key] = $queryParameters[$key];
                //create a variable
                $$key = $queryParameters[$key];
                //add the filters to the WHERE clause
                if ($key!=$constants::InputQueryParameterNames['replyFormat']){
                    if ($key==$constants::InputQueryParameterNames['rating']){
                        $keyLike = $key . " LIKE('" . $$key . "') ";
                    }
                    else{
                        $keyLike = $key . " LIKE('" . $$key . "%') ";
                    }
                    // Differentiate between first one and subsequent
                    if (strlen($whereClause)<8){
                        $whereClause .= $keyLike;
                    }
                    else {
                        $whereClause .= " AND " . $keyLike;
                    }
                }
            }
        }
        if (isset($replyFormat) && $inputParameters['replyFormat']=='html'){
            $replyHTML = true;
        }
        return $whereClause;
    }
}
function sendReply($response, $viewName, $inputArray, $replyHTML){
    //Now how to render, HTML or JSON
    if ($replyHTML){
        //Pass the movieData into the view
        return $this->renderer->render($response, $viewName, $inputArray);
    }
    else{
        return json_encode($inputArray['movieData']);
    }

}
