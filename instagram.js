$(function searchByHashtag (keyword) {
    //1.get instagram.json with AJAX
    $.get("https://www.instagram.com/explore/tags/thailand/?__a=1", function (data, status) {
        console.log(data);
        console.log(status);

        $("#location").text(data.graphql.hashtag.name);
        //$("#slug").text(data.graphql.location.slug);
        $("#noofpost").text(data.graphql.hashtag.edge_hashtag_to_media.count);

        var imgUrl = data.graphql.hashtag.edge_hashtag_to_top_posts.edges[0].node.display_url;
        //$("#post").attr("src",imgUrl);
        for (node in data.graphql.hashtag.edge_hashtag_to_top_posts.edges) {
            var post = data.graphql.hashtag.edge_hashtag_to_top_posts.edges[node];
            console.log(post.node.display_url);
            var row = `<div class="col-4" sty="padding:30px">
                            <img height="300" width="300" src="${post.node.display_url}" alt="">
                                <div class="row">
                                <div class="col">comment:${post.node.edge_media_to_comment.count}</div>
                                <div class="col">likes:${post.node.edge_liked_by.count}</div>
                        </div>
                                <div class="row">
                                <div class="col">${post.node.edge_media_to_caption.edges[0].node.text}</div>
                        </div>
                    </div>`;
            $("#posts").append(row);
        
        }

    });
});