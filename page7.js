<script type="text/javascript" src="http://code.jquery.com/jquery-latest.min.js"></script>
jQuery(function ($) {
    $("p.Question").css({ cursor: "pointer" }).click(function () {
        $(this).next().toggle("normal");
    });
});


