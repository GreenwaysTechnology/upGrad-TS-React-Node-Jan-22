enum Direction {
    Up,
    Down,
    Left,
    Right,
}
console.log(Direction.Up)
console.log(Direction.Down)

enum UserResponse {
    No = 0,
    Yes = 1,
}

enum Status {
    No = "Not Ok",
    Yes = "ok"
}
function respond(recipient: string, message: UserResponse): void {
    // ...
    console.log(recipient, message)
}

respond("Princess Caroline", UserResponse.Yes);
console.log(Status.Yes)
console.log(Status)