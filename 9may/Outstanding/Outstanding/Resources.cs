using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Outstanding;



public abstract class Resouces
{
    public string Title;
    public string Author;
    public int NumberOfChapters;
}

public class Paperback: Resouces
{
    public string ISBN;
    public int NumberOfPages;
    public int NumberOfBorow;
    
    public override bool IsOutstanding()
    {
        return NumberOfBorow > 10;
    }

    public override void PrintDetails()
    {
        Console.WriteLine($"[Paperback] Title: {Title}, Author: {Author}, Chapters: {NumberOfChapters}, ISBN: {ISBN}, Pages: {NumberOfPages}, Borrowers: {NumberOfBorow}");
    }

}
public class DigitalResource : Resouces
{
    public double PlayLength;
    public string FileFormat;
    public double AvgReviewPoints;

    public override bool IsOutstanding()
    {
        return AvgReviewPoints > 4.5;
    }

    public override void PrintDetails()
    {
        Console.WriteLine($"[Digital] Title: {Title}, Author: {Author}, Chapters: {NumberOfChapters}, Length: {PlayLength} mins, Format: {FileFormat}, Reviews: {AvgReviewPoints}");
    }
}
namespace Outstanding
{
    internal class Resources
    {
    }
}
