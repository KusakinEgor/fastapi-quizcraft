from fastapi import APIRouter
from event.operation import api_router as operation_router

api_router = APIRouter(

)

api_router.include_router(operation_router)
