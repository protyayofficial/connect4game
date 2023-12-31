class ConnectFourAI:
    def __init__(self, rows = 6, cols = 7):
        """
        Initialize the Connect Four AI.

        Args:
            rows (int): Number of rows in the game board. Default is 6.
            cols (int): Number of columns in the game board. Default is 7.
        """
        self.rows = rows
        self.cols = cols

    def get_next_open_row(self, col, board):
        """
        Get the next available row in a given column.

        Args:
            col (int): Column to check for available rows.
            board (list): Current state of the game board.

        Returns:
            int: The next available row in the column.
        """
        for r in range(self.rows - 1, -1, -1):
            if board[r][col] == None:
                return r
        return None

    def evaluate_position(self, board, player):
        """
        Evaluate the position of the game board for AI strategy.

        Args:
            board (list): Current state of the game board.
            player (str): AI's player token ('AI' or 'player1').

        Returns:
            int: The score of the current board position.
        """

        score = 0

        for r in range(self.rows):
            for c in range(self.cols - 3):
                window = board[r][c:c + 4]
                score += self.evaluate_window(window, player)

        for c in range(self.cols):
            for r in range(self.rows - 3):
                window = [board[i][c] for i in range(r, r + 4)]
                score += self.evaluate_window(window, player)

        for r in range(self.rows - 3):
            for c in range(self.cols - 3):
                window = [board[r + i][c + i] for i in range(4)]
                score += self.evaluate_window(window, player)

        for r in range(3, self.rows):
            for c in range(self.cols - 3):
                window = [board[r - i][c + i] for i in range(4)]
                score += self.evaluate_window(window, player)

        return score

    def evaluate_window(self, window, player):
        """
        Evaluate the score of a specific window of the game board.

        Args:
            window (list): A window of the game board.
            player (str): AI's player token ('AI' or 'player1').

        Returns:
            int: The score of the given window.
        """
        ai_piece = 'AI'
        human_piece = 'player1'
        score = 0

        if window.count(ai_piece) == 4:
            score += 10000 if player == 'AI' else -10000
        elif window.count(ai_piece) == 3 and window.count(None) == 1:
            score += 5 if player == 'AI' else -50
        elif window.count(ai_piece) == 2 and window.count(None) == 2:
            score += 2 if player == 'AI' else -20

        if window.count(human_piece) == 3 and window.count(None) == 1:
            score += 50 if player == 'AI' else -5
        elif window.count(human_piece) == 2 and window.count(None) == 2:
            score += 20 if player == 'AI' else -2

        return score

    def minimax(self, board, depth, maximizing_player, alpha, beta, player):
        """
        Implement the minimax algorithm with alpha-beta pruning for AI decision-making.

        Args:
            board (list): Current state of the game board.
            depth (int): Depth of the search tree.
            maximizing_player (bool): Indicates if the AI is maximizing.
            alpha (int): Alpha value for alpha-beta pruning.
            beta (int): Beta value for alpha-beta pruning.
            player (str): AI's player token ('AI' or 'player1').

        Returns:
            int: The evaluated score of the board.
        """

        if depth == 0:
            return self.evaluate_position(board, player)

        if maximizing_player:
            max_eval = float('-inf')
            for col in range(self.cols):
                if self.get_next_open_row(col, board) is not None:
                    row = self.get_next_open_row(col, board)
                    board[row][col] = player  # Simulate AI move
                    eval = self.minimax(board, depth - 1, False, alpha, beta, player)
                    board[row][col] = None  # Undo move
                    max_eval = max(max_eval, eval)
                    alpha = max(alpha, eval)
                    if beta <= alpha:
                        break
            return max_eval
        else:
            min_eval = float('inf')
            for col in range(self.cols):
                if self.get_next_open_row(col, board) is not None:
                    row = self.get_next_open_row(col, board)
                    board[row][col] = 'player1' if player == 'AI' else 'AI'  # Simulate human move
                    eval = self.minimax(board, depth - 1, True, alpha, beta, player)
                    board[row][col] = None  # Undo move
                    min_eval = min(min_eval, eval)
                    beta = min(beta, eval)
                    if beta <= alpha:
                        break
            return min_eval

    def ai_move(self, board):
        """
        Perform the AI's move on the game board.

        Args:
            board (list): Current state of the game board.

        Returns:
            int: The column where the AI will make its move.
        """
        best_score = float('-inf')
        best_col = 0

        for col in range(self.cols):
            if self.get_next_open_row(col, board) is not None:
                row = self.get_next_open_row(col, board)
                board[row][col] = 'AI'  # Simulate AI move
                score = self.minimax(board, 5, True, float('-inf'), float('inf'), 'AI')
                board[row][col] = None  # Undo move

                if score > best_score:
                    best_score = score
                    best_col = col

        return best_col
        
    def check_winner(board, row, col, player):
        """
        Check for a winning combination in the Connect Four game board.

        Args:
            board (list): Current state of the game board.
            row (int): Row index where the player placed their token.
            col (int): Column index where the player placed their token.
            player (int): Player number (1 or 2) indicating the current player.

        Returns:
            bool: True if there's a winning combination, False otherwise.
        """
        # Check horizontally
        for c in range(len(board[0]) - 3):
            if (
                board[row][c] == player
                and board[row][c + 1] == player
                and board[row][c + 2] == player
                and board[row][c + 3] == player
            ):
                return True

        # Check vertically
        for r in range(len(board) - 3):
            if (
                board[r][col] == player
                and board[r + 1][col] == player
                and board[r + 2][col] == player
                and board[r + 3][col] == player
            ):
                return True

        # Check diagonally (positive slope)
        for r in range(len(board) - 3):
            for c in range(len(board[0]) - 3):
                if (
                    board[r][c] == player
                    and board[r + 1][c + 1] == player
                    and board[r + 2][c + 2] == player
                    and board[r + 3][c + 3] == player
                ):
                    return True

        # Check diagonally (negative slope)
        for r in range(3, len(board)):
            for c in range(len(board[0]) - 3):
                if (
                    board[r][c] == player
                    and board[r - 1][c + 1] == player
                    and board[r - 2][c + 2] == player
                    and board[r - 3][c + 3] == player
                ):
                    return True

        return False

