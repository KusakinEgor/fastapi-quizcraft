from enum import StrEnum

class CustomEnum(StrEnum):
    """
    Note:
        A custom Enum class that extends StrEnum
        created for control implementation enums.

    Example:
        class StatusForm(CustomEnum):
            OPEN = "Open"
            CLOSED = "Closed"
        
        assert str(StatusForm.OPEN) == "Open"
    """
    pass # No add something

class Visibility(CustomEnum):
    """Status for user quiz"""
    open = "Open"
    restricted = "Restricted"
