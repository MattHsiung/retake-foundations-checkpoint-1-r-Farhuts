/* eslint-env jasmine */
/* eslint-disable no-undef */

describe('Right Angle Triangles', () => {
  describe('rightAngleTopLeft', () => {
    beforeEach(() => {
      spyOn(String.prototype, 'repeat').and.callThrough();
    });
    it('returns an empty string when the rows input is 0', () => {
      expect(rightAngleTopLeft(0)).toBe('');
    });

    it('returns a string representation of a right triangle with the with the right angle in the top left', () => {
      /*
     
      the triangle below is an example of a right angle triangle where the
      right angle is located in the top left of the triangle
      
      *****
      ****
      ***
      **
      *
     
     
     
      */ // there shouldn't be a new line after the last row

      expect(rightAngleTopLeft(5)).toBe('*****\n**** \n***  \n**   \n*    ');
      expect(rightAngleTopLeft(4)).toBe('****\n*** \n**  \n*   ');
      expect(rightAngleTopLeft(3)).toBe('***\n** \n*  ');
      expect(rightAngleTopLeft(2)).toBe('**\n* ');
    });

    it('does not call String.prototype.repeat', () => {
      rightAngleTopLeft(5);
      expect(String.prototype.repeat.calls.count()).toBe(0);
    });
  });
  describe('rightAngleBottomLeft', () => {
    beforeEach(() => {
      spyOn(String.prototype, 'repeat').and.callThrough();
    });
    it('returns an empty string when the rows input is 0', () => {
      expect(rightAngleBottomLeft(0)).toBe('');
    });

    it('returns a string representation of a right triangle with the right angle in the bottome left', () => {
      /*

      the triangle below is an example of a right angle triangle where the
      right angle is located in the bottom left of the triangle


      *
      **
      ***
      ****
      *****
      ******
      *******
      ********
      
      
      
      */ // Note: There should not be a new line after the last row

      expect(rightAngleBottomLeft(8)).toBe(
        '*       \n**      \n***     \n****    \n*****   \n******  \n******* \n********'
      );
      expect(rightAngleBottomLeft(6)).toBe(
        '*     \n**    \n***   \n****  \n***** \n******'
      );
      expect(rightAngleBottomLeft(4)).toBe('*   \n**  \n*** \n****');
      expect(rightAngleBottomLeft(2)).toBe('* \n**');
    });
    it('does not call String.prototype.repeat', () => {
      rightAngleBottomLeft(4);
      expect(String.prototype.repeat.calls.count()).toBe(0);
    });
  });

  describe('rightAngleTopRight', () => {
    beforeEach(() => {
      spyOn(String.prototype, 'repeat').and.callThrough();
    });
    it('returns an empty string when the rows input is 0', () => {
      expect(rightAngleTopRight(0)).toBe('');
    });

    it('returns a string representation of a right triangle with the right angle at the top right', () => {
      /*

       the triangle below is an example of a right angle triangle where the
       right angle is located in the top right of the triangle

      ******
       *****
        ****
         ***
          **
           *      
      
           */ // Note: There should not be a new line after the last row

      expect(rightAngleTopRight(6)).toBe(
        '******\n *****\n  ****\n   ***\n    **\n     *'
      );
      expect(rightAngleTopRight(4)).toBe('****\n ***\n  **\n   *');
      expect(rightAngleTopRight(2)).toBe('**\n *');
    });
    it('does not call String.prototype.repeat', () => {
      rightAngleTopRight(2);
      expect(String.prototype.repeat.calls.count()).toBe(0);
    });
  });

  describe('rightAngleBottomRight', () => {
    beforeEach(() => {
      spyOn(String.prototype, 'repeat').and.callThrough();
    });
    it('returns an empty string when the rows input is 0', () => {
      expect(rightAngleBottomRight(0)).toBe('');
    });

    it('returns a string representation of a right triangle with the right angle at the bottom right', () => {
      /*

      the triangle below is an example of a right angle triangle where the
       right angle is located in the bottom right of the triangle
       
           *
          **
         ***
        ****
       *****
      ******   

      */ // Note: There should not be a new line after the last row

      expect(rightAngleBottomRight(6)).toBe(
        '     *\n    **\n   ***\n  ****\n *****\n******'
      );
      expect(rightAngleBottomRight(4)).toBe('   *\n  **\n ***\n****');
      expect(rightAngleBottomRight(3)).toBe('  *\n **\n***');
      expect(rightAngleBottomRight(2)).toBe(' *\n**');
    });
    it('does not call String.prototype.repeat', () => {
      rightAngleBottomRight(2);
      expect(String.prototype.repeat.calls.count()).toBe(0);
    });
  });
});
