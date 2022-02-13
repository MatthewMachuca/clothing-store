from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

origins = ['https://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {'ping'}

@app.get("/api/item")
async def get_item():
    return 1

@app.get("/api/item{id}")
async def get_item_by_id(id):
    return 1

@app.post("/api/item")
async def post_item(item):
    return 1

@app.put("/api/item{id}")
async def update_item(id, data):
    return 1

@app.delete("/api/item{id}")
async def delete_item(id):
    return 1