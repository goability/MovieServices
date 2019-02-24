<script language='javascript'>

    /*
        show selected searchBar in div content
        linkObj = HTML link object, use .import to retrieve data
        searchBarDivId = which div in the input (search-bar) to select
        divId = where to extract data
    */
    function showSearchBar(searchBarLinkObj, searchBarDivId, outboundDivId){
        var link = document.querySelector('link[rel="' + searchBarLinkObj + '"]');
        var content = link.import;

        // Grab DOM from warning.html's document.
        var searchBarElement = content.querySelector(searchBarDivId).cloneNode(true);

        document.getElementById(outboundDivId).appendChild(searchBarElement);
    }

</script>
