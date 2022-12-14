/* Scripts for Object Pages */

/* Remove clip icon from object pages and make it a descriptive link */
$('#clip').html("Download and Print Options");

/* Add button styles to islandora navigation links */
$('#islandora-solr-search-return-link a').addClass('green button');
$('#islandora-solr-search-next-link a').addClass('button');
$('#islandora-solr-search-prev-link a').addClass('button');
$('#block-islandora-compound-object-compound-jail-display a:contains("manage parent")').addClass("button");

/* Move transcript link to above PDF */
var $transcript_link = $('.tabs-primary__tab-link:contains("Transcript")');
var $transcript_link_container = $('<div class="transcript-link"></div>');

$('.islandora-pdf-object').before($transcript_link_container);
$transcript_link_container.append($transcript_link);
