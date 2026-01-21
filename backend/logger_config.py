import logging

from enums import CustomEnum
from config import LOG_LEVEL

LOG_FORMAT_DEBUG = "%(levelname)s:%(message)s:%(pathname)s:%(funcName)s:%(lineno)d"

class LogLevels(CustomEnum):
    info = "INFO"
    warning = "WARNING"
    error = "ERROR"
    debug = "DEBUG"

def configuration_loggin():
    """Set level in .env file"""
    log_level = str(LOG_LEVEL).upper()
    log_levels = [level.value for level in LogLevels] # [INFO, WARNING, ERROR, DEBUG]

    if log_level not in log_levels:
        # if log_leve not include in list use default lvl error
        logging.basicConfig(level=LogLevels.error)
        return
    
    if log_level == LogLevels.debug:
        logging.basicConfig(level=log_level, format=LOG_FORMAT_DEBUG)
        return
    
    logging.basicConfig(level=log_level)
