from urllib import response
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from model import Item
app = FastAPI()


from database import (
    fetch_all_item,
    fetch_one_item,
    create_item,
    remove_item,
)
origins = ['https://localhost:3000','https://localhost:3000/admin']

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {'ping'}

@app.get("/api/item")
async def get_item():
    respone = await fetch_all_item()
    return respone

@app.get("/api/item{name}", response_model=Item)
async def get_item_by_id(name):
    response = await fetch_one_item(name)
    if response:
        return response
    raise HTTPException(404, "Not found")

@app.post("/api/item", response_model=Item)
async def post_item(item:Item):
    response = await create_item(item.dict())
    if response:
        return response
    raise HTTPException(400, "Bad request")
    

#@app.put("/api/item{id}")
#async def update_item(id, data):
#    return 1

@app.delete("/api/item{name}")
async def delete_item(name):
    response = await remove_item(name)
    if response:
        return "Successfully deleted"
    raise HTTPException(404, " Something went wrong")