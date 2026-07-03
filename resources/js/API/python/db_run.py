import os
from pathlib import Path
from dotenv import load_dotenv
import pymysql

def query_database(part_no, dbName =False):
    # 1. Locate and load the Laravel .env file
    env_path = Path('.') / '.env'

    if not env_path.exists():
        print("Error: .env file not found. Place this script in your Laravel root directory.")
        return

    load_dotenv(dotenv_path=env_path)

    # 2. Extract database credentials
    db_connection = os.getenv("DB_CONNECTION", "mysql")
    db_host = os.getenv("DB_HOST", "127.0.0.1")
    db_port = int(os.getenv("DB_PORT", 3306))
    db_name = os.getenv("DB_DATABASE")
    db_user = os.getenv("DB_USERNAME")
    db_pass = os.getenv("DB_PASSWORD")

    if dbName:
        db_name = dbName

    # Safety check for non-MySQL configurations
    if db_connection != "mysql":
        print(f"Warning: DB_CONNECTION is set to '{db_connection}', not 'mysql'.")

    # 3. Connect to the MySQL Database
    try:
        connection = pymysql.connect(
            host=db_host,
            port=db_port,
            user=db_user,
            password=db_pass,
            database=db_name,
            cursorclass=pymysql.cursors.DictCursor # Returns rows as Python dictionaries
        )
        print(f"Successfully connected to database: {db_name}")



        with connection.cursor() as cursor:
            # 4. Define and execute your SQL query
            # Replace 'TABLE' with your actual database table name (e.g., 'users')
            table_name = "items" 
            sql = f"SELECT id,description,version FROM `{table_name}` WHERE is_latest='1' AND part_number = %s"
            
            # Use parameterized queries (%s) to protect against SQL Injection
            cursor.execute(sql, (part_no,))
            
            # Fetch the matching row
            result = cursor.fetchone()

            # 5. Output the result
            if result:
                print("\n--- Match Found ---")
                print(result["id"])
                print(result["description"])
                print(result["version"])

                sql2 = f"SELECT * FROM `media` WHERE model_id = %s"
                cursor.execute(sql2, (result["id"],))
                result2 = cursor.fetchone()
                print(result2)
            else:
                print("\nNo record found with ID 555.")

    except pymysql.MySQLError as e:
        print(f"\nDatabase Connection Error: {e}")
        
    finally:
        # Ensure the connection is closed even if the script fails
        if 'connection' in locals() and connection.open:
            connection.close()
            print("\nDatabase connection closed.")


# TESTING
if __name__ == "__main__":
    query_database("102731","pdm")


