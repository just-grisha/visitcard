import React from 'react'

export default function CreateVisitComponent() {
  return (
    <div>
    <form method="post">
    <input type="text" name="nickname" id="text1" class="from-control" placeholder="введите nickname"><br>
    <textarea name="password" id="text3" class="from-control" placeholder="введите password"></textarea><br>
    <input type="submit" class="btn btn-success" value="Отправить">
    </form>
    </div>
  )
}
