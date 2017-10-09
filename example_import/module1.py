print("I will always be ran...even when I get imported")

def greeting():
    print("Hello, from module 1")

    print("The name of the program is:",__name__)


if __name__ == '__main__':
    greeting()
