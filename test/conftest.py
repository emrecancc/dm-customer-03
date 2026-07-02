import pytest
from server import server

@pytest.fixture(scope='session', autouse=True)
def close_server():
    """Ensure the test server is closed after all tests run."""
    yield
    # Close the server to release the port and avoid EADDRINUSE errors
    try:
        server.close()
    except Exception:
        # If the server is already closed or does not support close, ignore
        pass
