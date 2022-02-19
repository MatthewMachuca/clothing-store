from unittest import result
from model import Item
import motor.motor_asyncio

client = motor.motor_asyncio.AsyncIOMotorClient('mongodb://localhost:27017')

database = client.ItemList

collection = database.Item

async def fetch_one_item(name):
    document = await collection.find_one({"name":name})
    return document



async def fetch_all_item():
    items = []
    cursor = collection.find({})
    async for document in cursor:
        items.appen(Item(**document))
    return items

async def create_item(item):
    document = item
    result = await collection.insert_one(document)
    return document

async def remove_item(name):
    await collection.delete_one({"name":name})
    return True