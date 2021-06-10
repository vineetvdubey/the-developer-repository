# The Developer Repository - [DEMO](https://dev-repo.herokuapp.com/)

A platform where anyone can create their developer profile. Created using NodeJS backend + vanilla html/css/js frontend.  
<br>

### API Reference

<br>

```
GET /api/developers
Sample Response Body:
[{
	"id": "gcnit",
	"avatar_url": "https://avatars.githubusercontent.com/u/4833751?v=4"
}, {
	"id": "sagarjain0907",
	"avatar_url": "https://avatars.githubusercontent.com/u/20463272?v=4"
}]
Status: 200
```

<br>

```
POST /api/developers
Sample Request Body:
{
	"github_id": "gcnit",
	"linkedin_id": "gcnit",
	"codechef_id": "gc_nit",
	"hackerrank_id": "gcnit",
	"twitter_id": "gc_nit",
	"medium_id": "gc_nit"
}

Sample Response Body:
{
	"id": "gcnit"
}
Status: 201 (User Created), 400 (GitHub username is invalid)
```

<br>

```
GET /api/developers/:id
Sample Response Body:
{
	"id": "gcnit",
	"avatar_url": "https://avatars.githubusercontent.com/u/4833751?v=4",
	"name": "Gaurav Chandak",
	"company": "workat.tech",
	"blog": "https://workat.tech",
	"location": "Bangalore, India",
	"email": null,
	"bio": "Building workat.tech;\r\nPreviously Software Engineer at @Flipkart, @microsoft and @tracxn",
	"github_id": "gcnit",
	"linkedin_id": "gcnit",
	"codechef_id": "gc_nit",
	"hackerrank_id": "gcnit",
	"twitter_id": "gc_nit",
	"medium_id": "gc_nit",
	"repos": [{
		"name": "awesome-learn-to-code",
		"html_url": "https://github.com/gcnit/awesome-learn-to-code",
		"description": "A list of awesome resources for learning to code",
		"updated_at": "2020-08-12T18:21:53Z"
}]
}
Status: 200 (Valid User), 404 (User does not exist)
```

<br>

```
DELETE /api/developers/:id

Status: 204 (Deleted)
```
